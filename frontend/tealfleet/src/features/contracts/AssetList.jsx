import * as React from "react";
import { useState } from "react";

// Chakra-UI components
import { Tr, Td, Checkbox } from "@chakra-ui/react";

import { EmailIcon, InfoOutlineIcon } from "@chakra-ui/icons";

import { useToast } from "@chakra-ui/react";

// import location of the API server
import { API_ENDPOINT } from "../../constants/apiEndpoint";

function AssetList({ assetInformations, newContractNo, newContractId }) {
  const [isChecked, setIsChecked] = useState(false);
  const toast = useToast();

  const handleChange = (e) => {
    const checked = e.target.checked;
    setIsChecked(checked);

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
      // User selects the asset to add to the contract
      if (checked) {
        action = "add";

        const addAsset = JSON.stringify(assetInfo, null, 2);
        fetch(`http://${API_ENDPOINT}/contracts/add/asset`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: addAsset,
        }).then(async (response) => {
          if (response.ok) {
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
            setIsChecked(false);
          }
        }).catch((error) => {
          console.error("Error adding asset:", error);
          setIsChecked(false);
        });
      }

      // User unselects the asset to remove from the contract
      if (!checked) {
        action = "remove";

        const removeAsset = JSON.stringify(assetInfo, null, 2);
        fetch(`http://${API_ENDPOINT}/contracts/remove/asset`, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          credentials: "include",
          body: removeAsset,
        }).then(async (response) => {
          if (response.ok) {
            toast({
              title: "Asset removed",
              description: `${asset_name}`,
              status: "success",
              position: "bottom",
              variant: "subtle",
            });
          } else {
            toast({
              title: "Error",
              description: `Error removing ${asset_name}`,
              status: "error",
              position: "bottom",
              variant: "subtle",
            });
            setIsChecked(true);
          }
        }).catch((error) => {
          console.error("Error removing asset:", error);
          setIsChecked(true);
        });
      }
    });
  };


  return (
    <Tr>
      <Td>
      <Checkbox
      isDisabled={newContractNo === ""}
      size="md"
      colorScheme="teal"
      isChecked={isChecked}
      onChange={handleChange}
    />
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
