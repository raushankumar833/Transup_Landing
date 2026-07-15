import React from "react";
import { Box, Container, Divider, Paper, Typography } from "@mui/material";

export default function RefundPolicy() {
  return (
    <Container
      maxWidth="lg"
      sx={{
        mt: 4,
        backgroundColor: "#f5eef8",
        py: 4,
        borderRadius: 2,
      }}
    >
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 2,
          backgroundColor: "#ffffff",
        }}
      >
        {/* Heading */}
        <Box sx={{ textAlign: "center", mb: 4 }}>
          <Typography
            variant="h2"
            component="div"
            sx={{
              fontSize: { xs: "2rem", sm: "2.5rem", md: "3rem" },
              fontWeight: 700,
              color: "#222",
              letterSpacing: "0.02em",
            }}
          >
            Refund & Policy
          </Typography>

          <Divider
            sx={{
              width: "60px",
              height: "8px",
              bgcolor: "#dc5f5f",
              borderRadius: "4px",
              my: 2,
              mx: "auto",
            }}
          />
        </Box>

        {/* Content */}
        <Box>
          <Typography
            sx={{ mb: 3, lineHeight: 1.8, fontSize: "16px", color: "#444" }}
          >
            Once a User chooses to avail any service plan/offer announced by{" "}
            <strong>Transup Online Service Private Limited</strong> and agrees to buy that
            plan/offer by due payment for that plan/offer to{" "}
            <strong>Transup Online Service Private Limited</strong>, such payment by User shall not
            be refunded by <strong>Transup Online Service Private Limited</strong> under any
            circumstances whatsoever. Please note that such act of buying{" "}
            <strong>Transup Online Service Private Limited</strong> plan is irreversible process
            under the applicable law.
          </Typography>

          <Typography
            sx={{ mb: 3, lineHeight: 1.8, fontSize: "16px", color: "#444" }}
          >
            Post receipt of payment from the User for the above-mentioned plan,{" "}
            <strong>Transup Online Service Private Limited</strong> shall create User ID in its
            system ONLY post successful KYC verification of such User. If the
            User is unable to get successful KYC done,{" "}
            <strong>Transup Online Service Private Limited</strong> shall not be able to create User
            ID of such User. Thus, in order to avail{" "}
            <strong>Transup Online Service Private Limited</strong> services on its portal, User has
            to mandatorily get successful KYC verification done.
          </Typography>

          <Typography sx={{ lineHeight: 1.8, fontSize: "16px", color: "#444" }}>
            Post User Id creation, while availing various services on{" "}
            <strong>Transup Online Service Private Limited</strong> portal, transactions which have
            failed for any reason directly attributable to{" "}
            <strong>Transup Online Service Private Limited</strong> and{" "}
            <strong>Transup Online Service Private Limited</strong> has received corresponding
            confirmation from the payment gateway, will be automatically
            refunded to User’s bank account within 3–21 working days from the
            date of transaction and a confirmation mail will be sent to User’s
            email id registered with <strong>Transup Online Service Private Limited</strong>. Please
            note that only the actual transaction amount will be refunded
            excluding payment gateway charges and all applicable taxes.
            However, for cases where User has received successful completion
            confirmation but not received services, User is required to submit a
            complaint by sending an e-mail to customer care Email ID given on
            this website. <strong>Transup Online Service Private Limited</strong> shall enquire the
            matter after receiving complaint from the User and based on enquiry{" "}
            <strong>Transup Online Service Private Limited</strong> may refund the payment. In all
            cases, <strong>Transup Online Service Private Limited</strong> liability will be
            restricted to providing User a valid refund to the extent of
            corresponding payment received by{" "}
            <strong>Transup Online Service Private Limited</strong> with respect to a particular
            transaction. <strong>Transup Online Service Private Limited</strong> shall not be
            responsible for any other claim or consequential liability arising
            out of failed services on our system.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
}