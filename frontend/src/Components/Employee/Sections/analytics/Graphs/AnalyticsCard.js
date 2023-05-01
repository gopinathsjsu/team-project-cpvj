

import AnalyticsCard from "./AnalyticsCard";
import {Dropdown, Grid, Text} from "@nextui-org/react";
import React, {useEffect, useState} from "react";
import axios from "axios";
import WeeklyDayVsClassesLine from "./Graphs/WeeklyDayVsClassesLine";
import HoursSpentByWeekType from "./Graphs/HoursSpentByWeekType";
import AnalyticsCards from "./AnalyticsCard";
import ClassesVsUsers from "./Graphs/ClassesVsUsers";
import MostVisitedDayHeatMap from "./Graphs/HeatMap/MostVisitedDayHeatMap";

import {Card, Grid, Text} from "@nextui-org/react";
import React from "react";


const AnalyticsCards = (props)=> {

    /**
     * Here the data i get is an array of the form [ {prev:val1, current:val2, change:val3}..]
     * and i have 3 such objects for 3 cards
     * 0th index is for total checkins
     * 1st index is for new members
     * 2nd index is for enrollment in classes
     *
     * i could've made the cards dynamically, since they are only 3 i resorted to hard coding.
     */

}


export default AnalyticsCards
