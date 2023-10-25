"use client";
import React, { useState } from "react";

export function Tabs({ children }) {
  function findActiveTab(a) {
    return a.reduce((accumulator, currentValue, i) => {
      if (currentValue.props.active) {
        return i;
      }
      return accumulator;
    }, 0);
  }

  function tabValidator(tab) {
    return tab.type.displayName === "Tab" ? true : false;
  }

  const [activeTab, setActiveTab] = useState(findActiveTab(children));

  return (
    <>
      <div className="grid grid-flow-col text-center text-gray-300 bg-green-600 shadow-md px-4 md:px-20">
        {" "}
        {children.map((item, i) => {
          return (
            <>
              {tabValidator(item) && (
                <Tab
                  key={`tab-${i}`}
                  currentTab={i}
                  activeTab={activeTab}
                  setActiveTab={setActiveTab}
                >
                  {item.props.children}
                </Tab>
              )}
            </>
          );
        })}
      </div>
      <div className="p-1">
        {children.map((item, i) => {
          return (
            <div
            key={`content-${i}`}
            className={` ${i === activeTab ? "visible" : "hidden"}`}
            >
              {item.props.component}
            </div>
          );
        })}
      </div>
    </>
  );
}

export function Tab({ children, activeTab, currentTab, setActiveTab }) {
  return (
    <>
      <div
        className={`flex justify-center p-8 rounded-lg  text-sm cursor-pointer 
      ${
        activeTab === currentTab
          ? "text-white cursor-pointer"
          : "text-gray-400"
      }`}
        onClick={() => setActiveTab(currentTab)}
      >
        {children}
      </div>
    </>
  );
}

Tab.displayName = "Tab";
