import * as S from "./style";
import * as React from "react";
import { Global } from "@emotion/react";
import { styled } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { grey } from "@mui/material/colors";
import Typography from "@mui/material/Typography";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import useTranslate from "@/hooks/useTranslate";
import { useCart } from "@/providers/cartProvider";
import useMediaQuery from "@/hooks/useMediaQuery";
import { IoMdCart } from "react-icons/io";
import { RiCloseLargeFill } from "react-icons/ri";

interface Props {
  window?: () => Window;
}

const Root = styled("div")(({ theme }) => ({
  height: "100%",
  backgroundColor: grey[100],
  ...theme.applyStyles("dark", {
    backgroundColor: (theme.vars || theme).palette.background.default,
  }),
}));

const StyledBox = styled("div")(({ theme }) => ({
  backgroundColor: "#fff",
  ...theme.applyStyles("dark", {
    backgroundColor: grey[800],
  }),
}));

const Puller = styled("div")(({ theme }) => ({
  width: 40,
  height: 6,
  backgroundColor: grey[300],
  borderRadius: 3,
  position: "absolute",
  top: 8,
  left: "calc(50% - 15px)",
  ...theme.applyStyles("dark", {
    backgroundColor: grey[900],
  }),
}));

const CartMobile = (props: Props) => {
  const { window } = props;
  const [open, setOpen] = React.useState(false);
  const isMobile = useMediaQuery();
  const { convertCurrency } = useTranslate();
  const { mockupProducts, totalAmount } = useCart();

  const toggleDrawer = (newOpen: boolean) => () => {
    setOpen(newOpen);
  };

  // This is used only for the example
  const container =
    window !== undefined ? () => window().document.body : undefined;

  const drawerBleeding = isMobile ? 80 : 0;

  return (
    <Root>
      <CssBaseline />
      <Global
        styles={{
          ".MuiDrawer-root > .MuiPaper-root": {
            height: `calc(50% - ${drawerBleeding}px)`,
            overflow: "visible",
          },
        }}
      />
      <S.ToggleCart
        onClick={toggleDrawer(true)}
        style={{ display: !isMobile ? "flex" : "none" }}
      >
        <IoMdCart
          style={{
            color: "var(--color-white)",
            width: "30px",
            height: "30px",
          }}
        />
      </S.ToggleCart>

      <S.ToggleCartClose
        onClick={toggleDrawer(false)}
        style={{ display: !isMobile && open ? "flex" : "none" }}
      >
        <RiCloseLargeFill
          style={{
            width: "20px",
            height: "20px",
            color: "var(--color-black)",
          }}
        />
      </S.ToggleCartClose>

      <SwipeableDrawer
        container={container}
        anchor="bottom"
        open={open}
        onClose={toggleDrawer(false)}
        onOpen={toggleDrawer(true)}
        swipeAreaWidth={drawerBleeding}
        disableSwipeToOpen={false}
        keepMounted
      >
        <StyledBox
          sx={{
            position: "absolute",
            top: -drawerBleeding,
            borderTopLeftRadius: 8,
            borderTopRightRadius: 8,
            visibility: "visible",
            right: 0,
            left: 0,
          }}
        >
          <Puller />
          <S.Row>
            <Typography
              sx={{
                padding: "30px 20px",
                color: "var(--grey-2)",
                fontFamily: "var(--lexend)",
                fontSize: "var(--font-size-18)",
              }}
            >
              Valor Total:
            </Typography>
            <Typography
              sx={{
                padding: "30px 20px",
                color: "var(--grey-2)",
                fontSize: "var(--font-size-20)",
                fontFamily: "var(--lexend)",
                height: "100%",
              }}
            >
              {convertCurrency(totalAmount)}
            </Typography>
          </S.Row>
        </StyledBox>
        <S.Content>
          <S.Section>
            <S.SubTitle>Produtos:</S.SubTitle>
            <S.ItemList>
              {mockupProducts.map((item, index) => (
                <S.Item key={index}>
                  <span>
                    {item.name} x{item.quantity}
                  </span>
                  <span>{convertCurrency(item.amount)}</span>
                </S.Item>
              ))}
            </S.ItemList>
          </S.Section>
        </S.Content>
      </SwipeableDrawer>
    </Root>
  );
};
export default CartMobile;
