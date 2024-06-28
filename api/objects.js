const supertest = require('supertest');
const baseURL = require('../globalVariable');

const getUser = () => supertest(baseURL)
    .get('/users/me')
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJhNDc2OTk3ODU4MzAwMTNiY2Q4NzMiLCJpYXQiOjE3MTQwNDY4MjV9.M5RsFWsHyDC0kWHZH-_Da-UDTTkC3DKZ7-eZkQ2qMc4')

const postContacts = () => supertest(baseURL)
    .post('/contacts')
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJhNDc2OTk3ODU4MzAwMTNiY2Q4NzMiLCJpYXQiOjE3MTQwNDY4MjV9.M5RsFWsHyDC0kWHZH-_Da-UDTTkC3DKZ7-eZkQ2qMc4')   
    
const getContacts = () => supertest(baseURL)
    .get('/contacts')
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJhNDc2OTk3ODU4MzAwMTNiY2Q4NzMiLCJpYXQiOjE3MTQwNDY4MjV9.M5RsFWsHyDC0kWHZH-_Da-UDTTkC3DKZ7-eZkQ2qMc4')   

const patchContacts = (id, body) => supertest(baseURL)
    .patch('/contacts/' + id)
    .send(body)
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJhNDc2OTk3ODU4MzAwMTNiY2Q4NzMiLCJpYXQiOjE3MTQwNDY4MjV9.M5RsFWsHyDC0kWHZH-_Da-UDTTkC3DKZ7-eZkQ2qMc4')

const nameContacts = (id) => supertest(baseURL)
    .get('/contacts/' + id)
    .set('Authorization', 'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjJhNDc2OTk3ODU4MzAwMTNiY2Q4NzMiLCJpYXQiOjE3MTQwNDY4MjV9.M5RsFWsHyDC0kWHZH-_Da-UDTTkC3DKZ7-eZkQ2qMc4')
    
    module.exports = {
    getUser,
    postContacts,
    getContacts,
    patchContacts,
    nameContacts
    }