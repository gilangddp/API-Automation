const { expect } = require('chai');
const { getUser, getContacts, postContacts, patchContacts, nameContacts } = require('../api/objects');
const globalVariable = require('../globalVariable.json');
const testData = require('../patchVariable.json');

describe('End-to-end Contacts', () => {


    it('register / add User', async () => {
        const response = await getUser()
        expect(response.status).equal(200)
        globalVariable.token = response.body.token
    })

    it('Login / GET User Profile', async () => {
        const response = await getUser()
        console.log(response.body)
        expect(response.status).equal(200)
        expect(response.body)
    })

    it('add Contacs', async () => {
        const response = await postContacts()
        .send({
            
                "firstName": "Gilang",
                "lastName": "Dwi",
                "birthdate": "1970-01-01",
                "email": "gilang@faker.com",
                "phone": "8005555555",
                "street1": "1 Main St.",
                "street2": "Apartment A",
                "city": "Anytown",
                "stateProvince": "KS",
                "postalCode": "12345",
                "country": "USA"
            
        })
        
        console.log(response.body)
        // expect(response.status).equal(200)
        expect(response.body)
    })

    it('GET Contacts List', async () => {
        const response = await getContacts()
        console.log(response.body)
        expect(response.status).equal(200)
        expect(response.body)
    })

    it('succes PATCH Contacts', async () => {
        const response = await patchContacts(
            '662cea7b73f1690013762ef7',
            testData.succesPatch
            
        )
        console.log(response.body)
        expect(response.status).equal(200)
        expect(response.body)
    })

    it('GET Contacts', async () => {
        const response = await nameContacts(
            '662a4c596052880013adb389'
        )
        console.log(response.body)
        expect(response.status).equal(200)
        expect(response.body.firstName).equal('John')
    })
})