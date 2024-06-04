import React, { createContext, useState } from "react";
import { ProfileContextValues, TabValue } from "./types";

// Create the context with default values
export const ProfileContext = createContext<ProfileContextValues>({
  tabValues: [],
  selectedTab: { id: 0, title: "", value: "" },
  handleChangeTab: () => {},
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

  return (
    <ProfileContext.Provider
      value={{
        tabValues,
        selectedTab,
        handleChangeTab,
      }}
    >
      {children}
    </ProfileContext.Provider>
  );
};
