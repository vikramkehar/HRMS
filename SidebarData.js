import React from "react";
import * as GrIcons from "react-icons/gr";
import * as IoIcons from "react-icons/io";
import * as RiIcons from "react-icons/ri";
import * as BsIcons from "react-icons/bs";
import * as PiIcons from "react-icons/pi";

export const SidebarData = [
{
    title: "Employee",
    path: "/employee",
    icon: <BsIcons.BsFillPersonFill />,
},   
{
	title: "Master Menu",
	path: "/master",
	icon: <BsIcons.BsFillGridFill />,
	iconClosed: <RiIcons.RiArrowDownSFill />,
	iconOpened: <RiIcons.RiArrowUpSFill />,

	subNav: [
	{
		title: "Technology",
		path: "/master/technology",
		icon: <GrIcons.GrTechnology />,
	},
	{
		title: "Security Group",
		path: "/master/security",
		icon: <PiIcons.PiDevicesFill />,
	},
    {
		title: "Device",
		path: "/master/device",
		icon: <PiIcons.PiDevicesFill />,
	},
    {
		title: "Client",
		path: "/master/client",
		icon: <BsIcons.BsPersonFillAdd />,
	},
    {
		title: "Designation",
		path: "/master/designation",
		icon: <IoIcons.IoIosPaper />,
	},
    {
		title: "Role",
		path: "/master/role",
		icon: <IoIcons.IoIosPaper />,
	},
    {
		title: "Seat Number",
		path: "/master/seat",
		icon: <IoIcons.IoIosPaper />,
	},
    {
		title: "Type",
		path: "/master/type",
		icon: <IoIcons.IoIosPaper />,
	},
	],
},

];
