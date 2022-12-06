import axios from "axios";


export const ChickenSandwich = {
    method: 'POST',
    body: {
           'ingredient' : ["BUNS", "PICKLE","CHICKEN_B","SAUCE"],
           'salesInformation' : ["ChickenSandwich", 4.19]
          }
  };


export const DeluxeChickenSandwich = {
    method: 'POST',
    body: {
           'ingredient' : ["BUNS", "PICKLE","CHICKEN_B", "TOMATOES", "LETTUCE", "SAUCE"],
           'salesInformation' : ["DeluxeChickenSandwich", 4.89]
          }
  };


export const SpicyChickenSandwich = {
    method: 'POST',
    body: {
           'ingredient' : ["BUNS", "PICKLE","CHICKEN_B", "SAUCE"],
           'salesInformation' : ["SpicyChickenSandwich", 4.49]
          }
  };

export const Nuggets8 = {
    method: 'POST',
    body: {
           'ingredient' : ["CHICKEN_N"],
           'salesInformation' : ["Nuggets8", 4.29]
          }
  };

export const Nuggets12 = {
    method: 'POST',
    body: {
           'ingredient' : ["CHICKEN_N"],
           'salesInformation' : ["Nuggets12", 6.15]
          }
  };

export const GrilledChickenClub = {
    method: 'POST',
    body: {
           'ingredient' : ["BUNS", "PICKLE","CHICKEN_B", "TOMATOES", "LETTUCE", "SAUCE", "BACON"],
           'salesInformation' : ["GrilledChickenClub", 7.29]
          }
  };

export const Strips3 = {
    method: 'POST',
    body: {
           'ingredient' : ["CHICKEN_T"],
           'salesInformation' : ["Strips3", 4.69]
          }
  };

export const Strips4 = {
    method: 'POST',
    body: {
           'ingredient' : ["CHICKEN_T"],
           'salesInformation' : ["Strips4", 6.09]
          }
  };

export const GrilledChickenSandwich = {
    method: 'POST',
    body: {
           'ingredient' : ["BUNS", "PICKLE","CHICKEN_B", "TOMATOES", "LETTUCE", "SAUCE"],
           'salesInformation' : ["GrilledChickenSandwich", 5.79]
          }
  };

export const GrilledChickenWrap = {
    method: 'POST',
    body: {
           'ingredient' : ["CHICKEN_B,SAUCE,TORTILLA"],
           'salesInformation' : ["GrilledChickenWrap", 7.25]
          }
  };

export const Biscuits = {
    method: 'POST',
    body: {
           'ingredient' : ["BISCUITS"],
           'salesInformation' : ["Biscuits", 1.39]
          }
  };

export const ChickenMinis4 = {
    method: 'POST',
    body: {
           'ingredient' : ["CHICKEN_B","BUNS"],
           'salesInformation' : ["ChickenMinis4", 4.29]
          }
  };