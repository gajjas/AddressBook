import { mutations } from '@/store/index.js'
// import { actions } from '@/store/index.js'

describe("Store Tests from index.js", () => {
    let state

    beforeEach(() => {
        state = {
            contacts: [],
            selectedContact: null
        }
    })

    it("setContacts - sets payload as the new contacts in state", () => {
        var contact = [{ name: 'Fred' }]

        mutations.setContacts(state, contact)

        expect(state).toEqual({
            contacts: [{ name: 'Fred' }],
            selectedContact: null
        })
    })

    it("setSelectedContact- sets payload as the new selectedContact in state", () => {
        var contact = { name: 'Fred' }

        mutations.setSelectedContact(state, contact)

        expect(state).toEqual({
            contacts: [],
            selectedContact: { name: 'Fred' }
        })
    })

    // it("getContacts - gets from the api", async () => {
    //     const commit = jest.fn()

    //     await actions.getContacts({ commit })

    //     expect(commit).toHaveBeenCalledWith(
    //         "setContacts", arr)
    // })

})