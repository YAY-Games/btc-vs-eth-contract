const BtcVsEth = artifacts.require("BtcVsEth");

async function main() {
  const btcVsEth = await BtcVsEth.new(
    process.env["ORACLE_FIRST"],
    process.env["ORACLE_SECOND"],
    process.env["ADMIN_ADDRESS"],
    process.env["OPERATOR_ADDRESS"],
    process.env["INTERVAL_BLOCKS"],
    process.env["BUFFER_BLOCKS"],
    process.env["MIN_BET_AMOUNT"],
    process.env["ORACLE_UPDATE_ALLOWANSE"]
  );
  BtcVsEth.setAsDeployed(btcVsEth);

  console.log("contract deployed: ", btcVsEth.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });