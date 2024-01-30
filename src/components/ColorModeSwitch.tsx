import { Box, HStack, Switch, useColorMode } from "@chakra-ui/react";

const ColorModeSwitch = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  const strokeColor = colorMode === "dark" ? "#A445ED" : "#757575";

  return (
    <HStack borderLeft="1px" borderColor="gray.200" ml={6}>
      <Switch
        colorScheme="purple.100"
        isChecked={colorMode === "dark"}
        onChange={toggleColorMode}
        mr={3}
        ml={6}
      />
      <Box width="24px" height="24px">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          viewBox="0 0 22 22"
        >
          <path
            fill="none"
            stroke={strokeColor}
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M1 10.449a10.544 10.544 0 0 0 19.993 4.686C11.544 15.135 6.858 10.448 6.858 1A10.545 10.545 0 0 0 1 10.449Z"
          />
        </svg>
      </Box>
    </HStack>
  );
};

export default ColorModeSwitch;
