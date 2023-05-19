import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import QuestionAnswerIcon from '@mui/icons-material/QuestionAnswer';
import AutoStoriesIcon from '@mui/icons-material/AutoStories';
import EngineeringIcon from '@mui/icons-material/Engineering';
import GridViewIcon from '@mui/icons-material/GridView';
import HomeWorkIcon from '@mui/icons-material/HomeWork';

export const SideNavData = [
    {
        title: "Dashboard",
        icon: <GridViewIcon />,
        link: "/manage-rental/dashboard"
    },
    {
        title: "Payments",
        icon: <AttachMoneyIcon />,
        link: "/manage-rental/payments"
    },
    {
        title: "Maintenance",
        icon: <EngineeringIcon />,
        link: "/manage-rental/maintenancedashboard"
    },
    {
        title: "Chat",
        icon: <QuestionAnswerIcon />,
        link: "/manage-rental/chat"
    },
    {
        title: "Documents",
        icon: <AutoStoriesIcon />,
        link: "/manage-rental/documents"
    },
    {
        title: "Back to Residences",
        icon: <HomeWorkIcon />,
        link: "/manage-property"
    }
]