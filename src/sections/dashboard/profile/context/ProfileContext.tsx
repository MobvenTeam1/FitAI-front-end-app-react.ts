import React, { createContext, useState } from "react";
import { OutletSectionValue, ProfileContextValues, TabValue } from "./types";
import PersonifyView from "../views/PersonifyView";
import LinkedAccountsView from "../views/LinkedAccountsView";
import TrackingView from "../views/TrackingView";
import NotificationView from "../views/NotificationView";
import SupportView from "../views/SupportView";
import LegalView from "../views/LegalView";
import ThemeView from "../views/ThemeView";

// Create the context with default values
export const ProfileContext = createContext<ProfileContextValues>({
  tabValues: [],
  selectedTab: { id: 0, title: "", value: "" },
  handleChangeTab: () => {},
  outletSectionValues: [],
});

// Define the properties for the provider component
interface ChildrenProps {
  children: React.ReactNode;
}

// Create the provider component
export const ProfileContextProvider: React.FC<ChildrenProps> = ({
  children,
}) => {
  const tabValues: TabValue[] = [
    { id: 1, title: "Kişiselleştir" },
    { id: 2, title: "Bağlantılı Hesaplar" },
    { id: 3, title: "Takip" },
    { id: 4, title: "Bildirim" },
    { id: 5, title: "Destek" },
    { id: 6, title: "Yasal" },
    { id: 7, title: "Tema" },
  ];

  const [selectedTab, setSelectedTab] = useState<TabValue>(tabValues[0]);

  const handleChangeTab = (value: TabValue) => {
    setSelectedTab(value);
  };

  const outletSectionValues: OutletSectionValue[] = [
    { id: 1, title: "Kişiselleştir", section: <PersonifyView /> },
    { id: 2, title: "Bağlantılı Hesaplar", section: <LinkedAccountsView /> },
    { id: 3, title: "Takip", section: <TrackingView /> },
    { id: 4, title: "Bildirim", section: <NotificationView /> },
    { id: 5, title: "Destek", section: <SupportView /> },
    { id: 6, title: "Yasal", section: <LegalView /> },
    { id: 7, title: "Tema", section: <ThemeView /> },
  ];

  return (
    <ProfileContext.Provider
      value={{
        tabValues,
        selectedTab,
        handleChangeTab,
        outletSectionValues,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
