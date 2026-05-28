"use client";

import { createContext, useContext, useState, type ReactNode } from "react";
import { setClientGroups, type UserGroup, USER_GROUPS, DEFAULT_GROUPS } from "@/lib/groups";

type GroupContextType = {
  groups: UserGroup[];
  setGroups: (g: UserGroup[]) => void;
  group: UserGroup;
  changeGroup: (g: UserGroup) => void;
};

const GroupContext = createContext<GroupContextType>({
  groups: DEFAULT_GROUPS,
  setGroups: () => {},
  group: "career",
  changeGroup: () => {},
});

export function GroupProvider({
  children,
  initialGroups = DEFAULT_GROUPS,
}: {
  children: ReactNode;
  initialGroups?: UserGroup[];
}) {
  const valid = initialGroups.filter((g): g is UserGroup => USER_GROUPS.includes(g));
  const [groups, setGroupsState] = useState<UserGroup[]>(valid.length > 0 ? valid : DEFAULT_GROUPS);

  function setGroups(g: UserGroup[]) {
    setClientGroups(g);
    setGroupsState(g);
    fetch("/api/user-group", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ groups: g }),
    }).catch(() => {});
  }

  function changeGroup(g: UserGroup) {
    setGroups([g]);
  }

  return (
    <GroupContext.Provider value={{ groups, setGroups, group: groups[0] ?? "career", changeGroup }}>
      {children}
    </GroupContext.Provider>
  );
}

export function useGroup() {
  return useContext(GroupContext);
}
