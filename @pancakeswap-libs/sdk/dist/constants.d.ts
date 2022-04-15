import JSBI from 'jsbi';
export declare type BigintIsh = JSBI | bigint | string;
export declare enum ChainId {
    MAINNET = 56,
    BSCTESTNET = 97
}
export declare enum TradeType {
    EXACT_INPUT = 0,
    EXACT_OUTPUT = 1
}
export declare enum Rounding {
    ROUND_DOWN = 0,
    ROUND_HALF_UP = 1,
    ROUND_UP = 2
}
// export declare const FACTORY_ADDRESS = "0x1730484cd33Fb46B22177f3Ffe8E002b4D7E3600";
// export declare const INIT_CODE_HASH = "0xe1a4292e78925c53bcb106503ec2c9a30c35f3fde4c084afc5af611bcffde55b";
// export declare const FACTORY_ADDRESS = "0x6a8144Fa346A9A1335f81a1ba6A1430311441C93";
// export declare const INIT_CODE_HASH = "0xfa8021c1dc8eb8959399249079b31914ad1fcbd9ded53fda84acdbf65c72fcc9";
export declare const FACTORY_ADDRESS = "0x3E1e10840E357545d7804DA61B90E59D96a1A6b9";
export declare const INIT_CODE_HASH = "0x35cfc7422d5b34be038b8fd7e445827a7457a5fb31ec894c9ff579abe96ae1f2";
export declare const MINIMUM_LIQUIDITY: JSBI;
export declare const ZERO: JSBI;
export declare const ONE: JSBI;
export declare const TWO: JSBI;
export declare const THREE: JSBI;
export declare const FIVE: JSBI;
export declare const TEN: JSBI;
export declare const _100: JSBI;
export declare const _997: JSBI;
export declare const _1000: JSBI;
export declare enum SolidityType {
    uint8 = "uint8",
    uint256 = "uint256"
}
export declare const SOLIDITY_TYPE_MAXIMA: {
    uint8: JSBI;
    uint256: JSBI;
};
