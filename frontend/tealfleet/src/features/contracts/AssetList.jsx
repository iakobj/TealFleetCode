import * as React from "react";

// Chakra-UI components
import { Tr, Td, Checkbox } from "@chakra-ui/react";

import { EmailIcon, InfoOutlineIcon } from "@chakra-ui/icons";

import { useToast } from "@chakra-ui/react";

function AssetList({ assetInformations, newContractNo }) {
  const toast = useToast();

  return (
    <Tr>
      <Td>
        <Checkbox
          isDisabled={newContractNo.newContractNo === ""}
          size="md"
          colorScheme="teal"
          onChange={(e) => {
            const isChecked = e.target.checked;

            const asset_id = assetInformations.hardware_asset_id
              ? assetInformations.hardware_asset_id
              : assetInformations.software_asset_id;

            const asset_name = assetInformations.software_asset_name
              ? assetInformations.software_asset_name
              : assetInformations.hardware_asset_name;

            let action = "none";

            const examplePromise = new Promise((resolve, reject) => {
              // User unselects the asset from the contract (add asset to the contract)
              if (isChecked == true) {
                action = "add";
              }

              // User selects the asset from the contract (remove asset from the contract)
              if (isChecked == false) {
                action = "remove";
              }

              setTimeout(() => resolve(200), 5000);
            });
            console.log(asset_id, asset_name, isChecked);

            if (action == "add") {
              toast.promise(examplePromise, {
                success: {
                  title: "Promise resolved",
                  description: `${asset_name} added`,
                },
                error: {
                  title: "Promise rejected",
                  description: "Something wrong",
                },
                loading: {
                  title: "Promise pending",
                  description: `Adding ${asset_name} to the contract`,
                },
              });
            } else if (action == "remove") {
              toast.promise(examplePromise, {
                success: {
                  title: "Promise resolved",
                  description: `${asset_name} removed`,
                },
                error: {
                  title: "Promise rejected",
                  description: "Something wrong",
                },
                loading: {
                  title: "Promise pending",
                  description: `Removing ${asset_name} from the contract`,
                },
              });
            }
          }}
        ></Checkbox>
      </Td>
      <Td>
        {assetInformations.software_asset_name &&
          assetInformations.software_asset_name}
        {!assetInformations.software_asset_name &&
          assetInformations.hardware_asset_name}
      </Td>
      <Td>
        {assetInformations.tenant_name.length > 20
          ? `${assetInformations.tenant_name.slice(0, 20)}...`
          : assetInformations.tenant_name}
      </Td>
      <Td>
        {assetInformations.vendor_name
          ? assetInformations.vendor_name + " "
          : ""}
      </Td>
      <Td>
        {assetInformations.hardware_model_name
          ? assetInformations.hardware_part_number + " "
          : ""}
        {assetInformations.software_model_name
          ? assetInformations.software_model_name + " "
          : ""}
      </Td>

      <Td>{assetInformations.hardware_serial_no}</Td>

      <Td>{assetInformations.software_version_number}</Td>
    </Tr>
  );
}

export default AssetList;
