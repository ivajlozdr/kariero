import React, { createContext, useContext, useEffect, useState } from "react";
import { fetchData } from "../container/home/helper_functions";
import { DataType, UserData } from "../types_common";

interface GlobalStateContextType {
  data: DataType;
  setData: React.Dispatch<React.SetStateAction<DataType>>;
  userData: UserData;
  setUserData: React.Dispatch<React.SetStateAction<UserData>>;
}

const GlobalStateContext = createContext<GlobalStateContextType | undefined>(
  undefined
);

export const GlobalStateProvider: React.FC<{ children: React.ReactNode }> = ({
  children
}) => {
  const [data, setData] = useState<DataType>({
    usersCount: [],
    distinctOccupations: { count: 0, data: [] },
    topRecommendedOccupations: [],
    topRecommendedRelatedOccupations: [],
    mostNeededAbilities: [],
    mostNeededKnowledge: [],
    mostNeededSkills: [],
    mostNeededTasks: [],
    mostNeededTechnologySkills: [],
    mostNeededWorkActivities: [],
    mostSelectedPersonalityTypes: [],
    mostSelectedWorkEnvironments: [],
    mostSelectedJobPriorities: [],
    mostSelectedEducationLevels: [],
    mostSelectedCareerGoals: [],
    mostSelectedJobSatisfactionLevels: [],
    mostPreferredWorkStyleStructure: [],
    mostPreferredWorkStyleCollaboration: [],
    mostPreferredWorkStyleWorkEnvironment: []
  });

  const [userData, setUserData] = useState<UserData>({
    id: 0,
    first_name: "",
    last_name: "",
    email: ""
  });

  useEffect(() => {
    const token =
      localStorage.getItem("authToken") || sessionStorage.getItem("authToken");
    if (token) {
      fetchData(token, setUserData, setData);
      console.log("fetching");
    }
  }, []);

  return (
    <GlobalStateContext.Provider
      value={{ data, setData, userData, setUserData }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export const useGlobalState = (): GlobalStateContextType => {
  const context = useContext(GlobalStateContext);
  if (!context) {
    throw new Error("useGlobalState must be used within a GlobalStateProvider");
  }
  return context;
};
