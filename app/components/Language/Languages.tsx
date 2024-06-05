"use client";
import React from "react";
import LanguageItem from "./LanguageItem";
import {
  JsIcon,
  MongoDBIcon,
  NextIcon,
  NodeIcon,
  RailsIcon,
  ReactIcon,
  RubyIcon,
} from "@/app/common/IconifyIcons";
import Container from "../Container";

const Languages = () => {
  return (
    <div className="w-full py-4 mx-2 sm:mx-auto">
      <Container>
        <div className="w-full">
          <h2 className="text-center text-4xl font-bold mt-4 mb-8 md:mb-12">
            Languages & Frameworks
          </h2>
        </div>
        <div className="w-full relative overflow-hidden p-16">
          <div className="flex animated absolute left-0">
            <div className="flex w-full justify-around">
              <span className="max-w-none px-3">
                <LanguageItem IconComponent={ReactIcon} name="React" />
              </span>
              <span className="max-w-none px-3">
                <LanguageItem IconComponent={NextIcon} name="Next" />
              </span>
              <span className="max-w-none px-3">
                <LanguageItem IconComponent={JsIcon} name="JavaScript" />
              </span>
              <span className="max-w-none px-3">
                <LanguageItem IconComponent={RubyIcon} name="Ruby" />
              </span>
              <span className="max-w-none px-3">
                <LanguageItem IconComponent={NodeIcon} name="Node" />
              </span>
              <span className="max-w-none px-3">
                <LanguageItem IconComponent={RailsIcon} name="Rails" />
              </span>
              <span className="max-w-none px-3">
                <LanguageItem IconComponent={MongoDBIcon} name="MongoDB" />
              </span>
            </div>
            <div className="flex w-full justify-around" aria-hidden="true">
              <span className="max-w-none px-3">
                <LanguageItem IconComponent={ReactIcon} name="React" />
              </span>
              <span className="max-w-none px-3">
                <LanguageItem IconComponent={NextIcon} name="Next" />
              </span>
              <span className="max-w-none px-3">
                <LanguageItem IconComponent={JsIcon} name="JavaScript" />
              </span>
              <span className="max-w-none px-3">
                <LanguageItem IconComponent={RubyIcon} name="Ruby" />
              </span>
              <span className="max-w-none px-3">
                <LanguageItem IconComponent={NodeIcon} name="Node" />
              </span>
              <span className="max-w-none px-3">
                <LanguageItem IconComponent={RailsIcon} name="Rails" />
              </span>
              <span className="max-w-none px-3">
                <LanguageItem IconComponent={MongoDBIcon} name="MongoDB" />
              </span>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Languages;
