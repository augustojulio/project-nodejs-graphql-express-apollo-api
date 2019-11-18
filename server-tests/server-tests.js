const chai = require('chai');
const gql = require('graphql-tag');

const expect = chai.expect;
const url = `http://localhost:4000/`;
const request = require('supertest')(url);

const getAllIcos = gql`
{
  allIcos {
        address
        currency
        value
        txid
    }
}`;

describe('GraphQL', () => {
    it('Returns ico with value = 146859', (done) => {
        request.post('/graphql')
        .send({ query: '{ allIcos(value: 146859) { value address currency txid } }'})
        .expect(200)
        .end((err,res) => {
            // res will contain array with one user
            if (err) return done(err);
            res.body.allIcos.should.have.property('value')
            res.body.allIcos.should.have.property('address')
            res.body.allIcos.should.have.property('currency')
            res.body.allIcos.should.have.property('txid')
            done();
        })
    })

    it('Returns all icos', (done) => {
        request.post('/graphql')
        .send({ query: '{ allIcos { value address currency txid } }' })
        .expect(200)
        .end((err, res) => {
            // res will contain array of all users
            if (err) return done(err);
            // assume there are a 100 users in the database
            res.body.allIcos.should.have.lengthOf(100);
        })
    })
});