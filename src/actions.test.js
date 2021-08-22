const actions = require("./actions")
// @ponicode
describe("actions.setSearchField", () => {
    test("0", () => {
        let callFunction = () => {
            actions.setSearchField("Hello, world!")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            actions.setSearchField("Foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            actions.setSearchField("This is a Text")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            actions.setSearchField("foo bar")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            actions.setSearchField(undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
