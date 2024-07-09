import { getFullYear, getFooterCopy, getLatestNotification } from "./utils"
// import Data from 'Time'
describe("test suite for getFullYear", () => {
    it("should return the year", () => {

        const expectedYear = new Date().getFullYear();
        const actualYear = getFullYear();

        expect(actualYear).toBe(expectedYear);
    })
})