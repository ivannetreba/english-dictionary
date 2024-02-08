import {
  InputGroup,
  InputRightElement,
  Input,
  Image,
  useColorModeValue,
  Spinner,
  Text,
  Box,
} from "@chakra-ui/react";
import iconSearch from "../assets/icon-search.svg";
import { z } from "zod";
import { SubmitHandler, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const schema = z.object({
  searchInput: z
    .string()
    .nonempty("Whoops, can’t be empty…")
    .regex(/^[a-zA-Z\s]+$/, { message: "Only English letters are allowed." }),
});

type FormField = z.infer<typeof schema>;

interface Props {
  onSearch: (searchText: string) => void;
  isLoading: boolean;
}

const SearchInput = ({ onSearch, isLoading }: Props) => {
  const bg = useColorModeValue("gray.300", "dark.200");
  const spinnerColor = useColorModeValue("gray.100", "purple.100");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormField>({ resolver: zodResolver(schema) });

  const onSubmit: SubmitHandler<FormField> = (data) => {
    onSearch(data.searchInput);
  };

  return (
    <Box mb={["30px", "60px"]}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <InputGroup>
          <Input
            {...register("searchInput")}
            type="text"
            border="none"
            borderRadius="16px"
            bg={bg}
            focusBorderColor={errors.searchInput ? "red" : "purple.100"}
            h="48px"
            p="17px 25px"
          />
          <InputRightElement
            cursor="pointer"
            mx="10px"
            mt="4px"
            onClick={handleSubmit(onSubmit)}
          >
            {!isLoading ? (
              <Image src={iconSearch} />
            ) : (
              <Spinner color={spinnerColor} />
            )}
          </InputRightElement>
        </InputGroup>
        {errors.searchInput && (
          <Text mt="5px" color="red">
            {errors.searchInput.message}
          </Text>
        )}
      </form>
    </Box>
  );
};

export default SearchInput;
