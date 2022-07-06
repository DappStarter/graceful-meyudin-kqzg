require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'guess narrow flee skull guard render remember protect just private bottom tape'; 
let testAccounts = [
"0x4c4c2e0a01f5c5efb52b399701373ad7d954427b9f0416fec13896983e30289d",
"0x6ae05fb06871d94d47a14b5bae52b11741622db5d61566a554d4c95905b01dd0",
"0x67479d966ee11cff5cfc7fd539bfc378e9f148f6399c8d65bdf50326ae17e5ed",
"0xf70a28584c3955a81223f6a1283c7e505a3efbd145d591d8b88c6c9c5e962312",
"0x6362f9ce3f4410dfffb4f51c8c6e23105cb37e306de236a3dcef8286ef0bfbfc",
"0xed6b6cd71e9b898ef1e7550e0e3fadd4f13fbc361702a69292ddde8fd7134f1d",
"0x70cd2de02f03efed4c7ec0002ee857867360e010696b02ccd79fd1aab4b5d135",
"0x9e4ed9e4da954611664e49d4320a612fd00a0e160358e1d0727352f6d005048e",
"0x050cae9c4f48e86f5c4c0ae412a7acff55e1afb2435fe38866273ea30982775b",
"0x057a8d9c775dbed6f631c8f566534664d94c4588c36c23dd30d1d4c93909aee3"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

