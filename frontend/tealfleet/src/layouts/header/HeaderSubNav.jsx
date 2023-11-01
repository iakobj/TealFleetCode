// React components
import * as React from "react";
import { NavLink } from "react-router-dom";
import { useLocation } from "react-router-dom";

// Chakra-UI components
import { Flex, Text, HStack } from "@chakra-ui/react";

function HeaderSubNav() {
  const loc = useLocation();
  const location = loc.pathname.slice(1) || "Dashboard";

  const fetchData = async (location) => {
    const data = await fetch(
      `http://localhost:3000/navigation/sub/name/${location}`
    );
    return { data: await data.json() };
  };

  const fetchSubNavItems = async () => {
    const items = await fetchData(location);
    return items.data;
  };

  const [subNavItems, setSubNavItems] = React.useState([]);

  React.useEffect(() => {
    fetchSubNavItems().then((items) => {
      setSubNavItems(items);
    });
  }, [location]);

  return (
    <Flex>
      <HStack spacing={{ md: "0.5em", lg: "0.7em", xl: "2.0em" }}>
        {subNavItems &&
          subNavItems.map &&
          subNavItems.map((subNavItems) => (
            <Text
              color="blackAlpha.700"
              fontSize={{ base: "sm", sm: "sm", md: "lg" }}
              key={subNavItems.sub_nav_id}
            >
              <NavLink to={subNavItems.sub_nav_item}>
                {subNavItems.sub_nav_item}
              </NavLink>
            </Text>
          ))}
      </HStack>
    </Flex>
  );
}

export default HeaderSubNav;
