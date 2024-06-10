import * as React from "react";

// Chakra-UI components
import { Tr, Td, Checkbox } from "@chakra-ui/react";

import { EmailIcon, InfoOutlineIcon } from "@chakra-ui/icons";

import { useToast } from "@chakra-ui/react";

// import location of the API server
import { API_ENDPOINT } from "../../constants/apiEndpoint";

function AssetList({ assetInformations, newContractNo, newContractId }) {
  const toast = useToast();

  return (
    <Tr>
      <Td>
        <Checkbox
          isDisabled={newContractNo === ""}
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

            let assetInfo = {
              newContractNo: newContractNo,
              newContractId: newContractId,
              asset_id: asset_id,
              asset_type: assetInformations.asset_type,
            };

            const assetCheckboxAction = new Promise((resolve, reject) => {
              // User unselects the asset from the contract (add asset to the contract)
              if (isChecked == true) {
                action = "add";

                const addAsset = JSON.stringify(assetInfo, null, 2);
                try {
                  fetch(`http://${API_ENDPOINT}/contracts/add/asset`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: addAsset,
                  }).then(async (response) => {

                    //let action_status = await response.json();
                    console.log(response.ok);
                    if (response.ok == "true") {
                    toast({
                      title: "Asset added",
                      description: `${asset_name}`,
                      status: "success",
                      position: "bottom",
                      variant: "subtle",
                    });
                  } else {
                    toast({
                      title: "Error",
                      description: `Error adding ${asset_name}`,
                      status: "error",
                      position: "bottom",
                      variant: "subtle",
                    });
                  }


                  });
                } catch (error) {
                  console.error("Error loading form data:", error);
                }
              }

              // User selects the asset from the contract (remove asset from the contract)
              if (isChecked == false) {
                action = "remove";

                const removeAsset = JSON.stringify(assetInfo, null, 2);
                try {
                  fetch(`http://${API_ENDPOINT}/contracts/remove/asset`, {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    credentials: "include",
                    body: removeAsset,
                  }).then(async (response) => {
                    let action_status = await response.json();
                    if (action_status == "success") {
                      toast.promise(action_status, {
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
                    }
                  });
                } catch (error) {
                  console.error("Error loading form data:", error);
                }
              }
            });

            if (action == "remove") {
              toast.promise(assetCheckboxAction, {
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
