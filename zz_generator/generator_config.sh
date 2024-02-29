curl --location --request POST 'http://43.205.85.160:5000/api/generatorConfigSetup' \
--header 'Content-Type: application/json' \
--data-raw '{
    "generator_config": [
    {
      "address": "0x0469866e13cd7DF08f5482FBb127a72fF197365D",
      "data": "Some data",
      "supported_markets": [
        "0"
      ]
    }
  ],

  "runtime_config": {
    "ws_url": "wss://arb-sepolia.g.alchemy.com/v2/zaEVsF1FaVERyTsM42WGoE4uM7wRyfqK",
    "http_url": "https://arb-sepolia.g.alchemy.com/v2/zaEVsF1FaVERyTsM42WGoE4uM7wRyfqK",
    "private_key": "91e60908ad659c964169211f07d7c2328ca8919d81dfd772c850bebfd67d4cdf",
    "start_block": 16440453,
    "chain_id": 421614,
    "payment_token": "0x01d84D33CC8636F83d2bb771e184cE57d8356863",
    "staking_token": "0xdb69299dDE4A00c99b885D9f8748B2AeD1Fe4Ed4",
    "attestation_verifier": "0x3aB3487269206d5f6a10725d4e477BaA3611adcA",
    "entity_registry": "0xc54F0B48727902472e077Ae56b6321c4f2d77aD6",
    "proof_market_place": "0x9db3AF484D362765064854f73d90312e662dB65a",
    "generator_registry": "0x6FD6ED78f6D8a04bC9DF9480B4CD4A7E37e885a4",
    "ivs_url":"http://43.205.177.43:3030/checkInput",
    "markets":{
        "0":"1000"
    }
  }

}'