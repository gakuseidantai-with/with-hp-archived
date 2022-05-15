import React from "react";
import {
  ListItem,
  UnorderedList,
  Flex,
  Text,
  Box,
  Link,
  Drawer,
  DrawerOverlay,
  DrawerBody,
  DrawerContent,
  DrawerHeader,
  useDisclosure,
  useBreakpointValue,
  Img,
} from "@chakra-ui/react";
import { FaHamburger, FaWindowClose } from "react-icons/fa";

const HeaderMenuList: React.FC = React.memo(() => {
  return (
    <UnorderedList
      display="flex"
      flexDirection={{ base: "column", md: "row" }}
      alignItems="center"
      boxSizing="border-box"
      gap="32px"
      m="0"
      p="0"
    >
      <ListItem
        as="a"
        href="/"
        listStyleType="none"
        color={{ base: "white", md: "black" }}
        pt={{ base: "8px", md: 0 }}
        pb={{ base: "8px", md: 0 }}
      >
        トップページ
      </ListItem>
      <ListItem
        as="a"
        href="/members"
        listStyleType="none"
        color={{ base: "white", md: "black" }}
        pt={{ base: "8px", md: 0 }}
        pb={{ base: "8px", md: 0 }}
      >
        メンバー紹介
      </ListItem>
      <ListItem
        as="a"
        href="https://sabae-plancontest.jp/"
        target="_blank"
        listStyleType="none"
        color={{ base: "white", md: "black" }}
        pt={{ base: "8px", md: 0 }}
        pb={{ base: "8px", md: 0 }}
      >
        鯖江市地域活性化プランコンテスト
      </ListItem>
    </UnorderedList>
  );
});

export const Header: React.FC = React.memo(({}): JSX.Element => {
  // メニュー開閉State
  const { isOpen, onOpen, onClose } = useDisclosure();
  // mobile breakpoint
  const isMobile = useBreakpointValue({ base: true, md: false });

  return (
    <>
      <Flex
        position="fixed"
        top="0"
        backgroundColor="white"
        zIndex="1"
        height="70px"
        alignItems="center"
        justifyContent="space-between"
        width="100%"
        m="auto"
        p="8px 16px"
      >
        <Text fontSize="20px" fontWeight="bold" color="black" m="0">
          <Link as="a" href="/" w="auto" h="70px">
            <Img alt="" src="/images/with_logo.png" w="auto" h="70px" p="4px 0" />
          </Link>
        </Text>
        <Box display={{ base: "block", md: "none" }} fontSize="24px" onClick={onOpen}>
          <FaHamburger color="black" />
        </Box>
        {!isMobile && <HeaderMenuList />}
      </Flex>
      <Drawer placement="right" isOpen={isOpen} onClose={onClose} size="xs">
        <DrawerOverlay />
        <DrawerContent backgroundColor="black">
          <DrawerHeader borderBottomWidth="2px">
            <Flex alignItems="center" justifyContent="space-between">
              <Text color="white" m="0">
                メニュー
              </Text>
              <Box display="flex" fontSize="24px" onClick={onClose}>
                <FaWindowClose color="white" />
              </Box>
            </Flex>
          </DrawerHeader>
          <DrawerBody p="16px">
            <HeaderMenuList />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );

  // return (
  //   <header className={styles["headerContainer"]}>
  //     <div className={clsx("col-md-12", styles["header"])}>
  //       <div className="col-md-6">
  //         <Link href="/">
  //           <a>
  //             <img alt="" src="/images/with_logo.png" className={styles["logo"]} />
  //           </a>
  //         </Link>
  //       </div>
  //       <nav role="navigation" className={clsx("col-md-6", styles["navigation"])}>
  //         <ul>
  //           <li>
  //             <Link href="/">
  //               <a>トップページ</a>
  //             </Link>
  //           </li>
  //           <li>
  //             <Link href="/member">
  //               <a>メンバー紹介</a>
  //             </Link>
  //           </li>
  //           <li>
  //             <Link href="https://sabae-plancontest.jp/">
  //               <a target="_blank">プランコンテスト</a>
  //             </Link>
  //           </li>
  //         </ul>
  //       </nav>
  //     </div>
  //   </header>
  // );
});

// const styles = {
//   headerContainer: css`
//     width: 100%;
//     margin: 0;
//     position: fixed;
//     top: 0;
//     height: 70px;
//     background-color: #fff;
//     z-index: 99999;
//   `,
//   header: css`
//     display: flex;
//     width: 100%;
//     height: 100%;
//     position: sticky;
//     top: 0;
//     padding-left: 20px;
//     padding-right: 20px;
//     float: left;
//     border-radius: 7px;
//   `,
//   logo: css`
//     width: auto;
//     height: 70px;
//     padding: 4px 0;
//   `,
//   navigation: css`
//     margin: auto;
//     text-align: right;
//     ul {
//       padding: 0;
//       margin: 0;
//       line-height: 0;
//     }
//     li {
//       padding: 0;
//       margin: 0;
//       list-style: none;
//       display: inline-block;
//       zoom: 1;
//       a {
//         color: rgba(0, 0, 0, 0.7);
//         font-size: 18px;
//         padding: 10px;
//         position: relative;
//         transition: 0.2s;
//       }
//     }
//   `,
// };
