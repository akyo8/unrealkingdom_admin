import "font-awesome/css/font-awesome.min.css";
import "./assets/css/app.css";
import TypographyPage from "./pages/template/TypographyPage";
import LoginPage from "./pages/auth/LoginPage";
import ResetPassword from "./pages/auth/ResetPassword";
import ProfilePage from "./pages/profile/ProfilePage";
import ChangePasswordPage from "./pages/profile/ChangePasswordPage";
import UserPage from "./pages/user/UserPage";
import ItemPage from "./pages/item/ItemPage";
import CharacterPage from "./pages/character/CharacterPage";
import ServerStatusPage from "./pages/server/ServerStatusPage";
import AddUserPage from "./pages/user/AddUser";
import AddCharacterPage from "./pages/character/AddCharacter";
import AddItemPage from "./pages/item/AddItem";
import AdsPage from "./pages/ads/AdsPage";
import AddAds from "./pages/ads/AddAds";
import NftPage from "./pages/NFT/NftPage";
import WalletPage from "./pages/wallet/WalletPage";
import TransactionPage from "./pages/Transaction/TransactionPage";
import WhitelistPage from "./pages/Whitelist/WhitelistPage";
import AddWhitelistPage from "./pages/Whitelist/AddWhitelist";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import CharacterInPage from "./pages/character/CharacterInPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UserPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/user" element={<UserPage />} />
        <Route path="/adduser" element={<AddUserPage />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/change-password" element={<ChangePasswordPage />} />

        <Route path="/item" element={<ItemPage />} />
        <Route path="/additem" element={<AddItemPage />} />

        <Route path="/character" element={<CharacterPage />} />
        <Route path="/addcharacter" element={<AddCharacterPage />} />
        <Route path="/character/:userid" element={<CharacterInPage />} />

        <Route path="/ads" element={<AdsPage />} />
        <Route path="/addads" element={<AddAds />} />

        <Route path="/server" element={<ServerStatusPage />} />

        <Route path="/nft" element={<NftPage />} />
        <Route path="/wallet" element={<WalletPage />} />
        <Route path="/transaction" element={<TransactionPage />} />

        <Route path="/whitelist" element={<WhitelistPage />} />
        <Route path="/addwhitelist" element={<AddWhitelistPage />} />

        <Route path="/modal" element={<TypographyPage />} />
      </Routes>
    </Router>
  );
}

export default App;
