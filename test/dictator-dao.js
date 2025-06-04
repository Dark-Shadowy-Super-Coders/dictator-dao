const { expect } = require("chai");
const { ethers } = require("hardhat");

const TOKEN_SYMBOL = "TOKEN";
const TOKEN_NAME = "DictatorToken";
const SHARE_SYMBOL = "SHARE";
const SHARE_NAME = "DictatorShare";

describe("DictatorDAO", function () {
    let dao, token, owner, addr1;

    beforeEach(async function () {
        [owner, addr1] = await ethers.getSigners();
        const DAOFactory = await ethers.getContractFactory("DictatorDAO");
        dao = await DAOFactory.deploy(TOKEN_SYMBOL, TOKEN_NAME, SHARE_SYMBOL, SHARE_NAME, owner.address);
        await dao.deployed();
        const tokenAddress = await dao.token();
        const TokenFactory = await ethers.getContractFactory("DictatorToken");
        token = TokenFactory.attach(tokenAddress);
    });

    it("initializes with correct operator and token", async function () {
        expect(await dao.operator()).to.equal(owner.address);
        expect(await token.DAO()).to.equal(dao.address);
    });

    it("reports a positive price", async function () {
        const price = await token.price();
        expect(price.gt(0)).to.equal(true);
    });
});
