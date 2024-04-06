import { Navigate } from "react-router-dom";

import Dashboard from "../pages/Dashboard";
//General
import UiButtons from "../pages/Components/General/Buttons";
import UiTypography from "../pages/Components/General/Typographys";
//Navigation
import UiAnchor from "../pages/Components/Navigation/Anchor";
import UiBreadcrumb from "../pages/Components/Navigation/Breadcrumb";
import UiDropdown from "../pages/Components/Navigation/Dropdown";
import UiPagination from "../pages/Components/Navigation/Pagination";
import UiSteps from "../pages/Components/Navigation/Steps";
//
import Avatars from "../pages/Components/DataDisplay/Avatar";
import Badges from "../pages/Components/DataDisplay/Badge";
import Calenders from "../pages/Components/DataDisplay/Calendar";
import Cards from "../pages/Components/DataDisplay/Cards";
import Carousels from "../pages/Components/DataDisplay/Carousel";
import UiCollapse from "../pages/Components/DataDisplay/Collapse";
import UiDescriptions from "../pages/Components/DataDisplay/Descriptions";
import UiEmptyImages from "../pages/Components/DataDisplay/emptyImages";
import UiList from "../pages/Components/DataDisplay/List";
import UiPopover from "../pages/Components/DataDisplay/Popover";
import UiQRCode from "../pages/Components/DataDisplay/QRCode";
import UiSegmented from "../pages/Components/DataDisplay/Segmented";
import UiStatistic from "../pages/Components/DataDisplay/Statistic";
import UiTable from "../pages/Components/DataDisplay/Table/Table";
import UiTabs from "../pages/Components/DataDisplay/Tabs";
import UiTag from "../pages/Components/DataDisplay/Tag";
import UiTimeline from "../pages/Components/DataDisplay/Timeline";
import UiTooltip from "../pages/Components/DataDisplay/Tooltip";
import UiTour from "../pages/Components/DataDisplay/Tour";
import UiTree from "../pages/Components/DataDisplay/Tree/Tree";
import Alerts from "../pages/Components/Feedback/Alerts";
import UiDrawer from "../pages/Components/Feedback/Drawer";
import UiMessage from "../pages/Components/Feedback/Message";
import UiModal from "../pages/Components/Feedback/Modal";
import UiNotification from "../pages/Components/Feedback/Notification";
import UiPopconfirm from "../pages/Components/Feedback/Popconfirm";
import UiProgress from "../pages/Components/Feedback/Progress";
import UiResult from "../pages/Components/Feedback/Result";
import UiSkeleton from "../pages/Components/Feedback/Skeleton";
import UiSpin from "../pages/Components/Feedback/Spin";
import UiAutoComplete from "../pages/Components/DataEntry/AutoComplete";
import UiCascader from "../pages/Components/DataEntry/Cascader";
import UiCheckbox from "../pages/Components/DataEntry/Checkbox";
import UiColorPicker from "../pages/Components/DataEntry/ColorPicker";
import UiDatePicker from "../pages/Components/DataEntry/DatePicker";
import UiForm from "../pages/Components/DataEntry/Form";
import UiInput from "../pages/Components/DataEntry/Input";
import UiInputNumber from "../pages/Components/DataEntry/InputNumber";
import UiMentions from "../pages/Components/DataEntry/Mentions";
import UiRadio from "../pages/Components/DataEntry/Radio";
import UiRate from "../pages/Components/DataEntry/Rate";
import UiSelect from "../pages/Components/DataEntry/Select";
import UiSlider from "../pages/Components/DataEntry/Slider";
import UiSwitch from "../pages/Components/DataEntry/Switch";
import UiTimePicker from "../pages/Components/DataEntry/TimePicker";
import UiTransfer from "../pages/Components/DataEntry/Transfer";
import UiTreeSelect from "../pages/Components/DataEntry/TreeSelect";

//charts routes
import BasicAreachart from "../pages/Charts/AreaChart/BasicAreaChart";
import StackedArea from "../pages/Charts/AreaChart/StackedAreaChart";
import BasicLineChart from "../pages/Charts/LineChart/BasicLineChart";
import MultiLineCharts from "../pages/Charts/LineChart/MultiLineChart";
import StepLineChart from "../pages/Charts/LineChart/StepLineChart";
import BasicHistogram from "../pages/Charts/ColumnChart/BasicChart/Index";
import GroupedHistogram from "../pages/Charts/ColumnChart/GroupedChart";
import PercentageHistogram from "../pages/Charts/ColumnChart/PercentageChart";
import BasicBarCharts from "../pages/Charts/BarChart/BasicBar";
import StackedBarChart from "../pages/Charts/BarChart/StackedBar";
import GroupBarChart from "../pages/Charts/BarChart/GroupBar";
import PieCharts from "../pages/Charts/PieChart/Pie";
import RingDiagramChart from "../pages/Charts/PieChart/RingDiagram";
import DashboardProgressChart from "../pages/Charts/ProgressChart/DashboardChart";
import WaterWaveCharts from "../pages/Charts/ProgressChart/WaterWaveMap";
import BulletCharts from "../pages/Charts/ProgressChart/BulletChart";
import ScatterPlotcharts from "../pages/Charts/ScatterBubbleChart/ScatterPlot";
import Bubblecharts from "../pages/Charts/ScatterBubbleChart/BubbleCharts";

import StackedColumn from "../pages/Charts/StackedColumn";
import PluginTextEditor from "../pages/plugins/textEditor";
import AuthSignUp from "../pages/AuthenticationInner/SignUp";
import PagesUserProfile from "../pages/pages/UserProfile";
import PercentageArea from "../pages/Charts/AreaChart/PercentageAreaChart/PercentageArea";
import SignIn from "../pages/AuthenticationInner/SignIn";
import Forms from "../pages/plugins/Forms/Index";
import ClipBoard from "../pages/plugins/Clipboard";
import Textloop from "../pages/plugins/TextLoop";
import Video from "../pages/plugins/Video";
import Animation from "../pages/plugins/Animation";
import FaqPage from "../pages/pages/FAQ";
import Pricing from "../pages/pages/Pricing";
import TeamPage from "../pages/pages/Team";
import Timelinepage from "../pages/pages/Timeline";
import Widgets from "../pages/Widgets";
import PasswordReset from "../pages/AuthenticationInner/PasswordReset";
import PasswordCreate from "../pages/AuthenticationInner/PasswordCreate";
import LockScreen from "../pages/AuthenticationInner/Lock-Screen";
import TwoStepVerification from "../pages/AuthenticationInner/TwoStepVerification";
import SuccessMessage from "../pages/AuthenticationInner/SuccessMessage";
import Fourzerofour from "../pages/ErrorPages/404";
import Fivehundred from "../pages/ErrorPages/500";
import FourzerofourAlt from "../pages/ErrorPages/404Alt";
import Offline from "../pages/ErrorPages/Offline";
import Maintenance from "../pages/pages/Maintenance";
import ApiKey from "../pages/Apps/ApiKey";
import ContactPage from "../pages/Apps/Contact";
import Todo from "../pages/Apps/To-Do";
import EmailPage from "../pages/Apps/Email";
import Signin from "../pages/Authentication/login";
import Logout from "../pages/Authentication/logout";
import UserProfile from "../pages/Authentication/user-profile";
import Register from "../pages/Authentication/register";
import Forgetpassword from "../pages/Authentication/forgetpassword";
import ChatPage from "../pages/Apps/Chat";
import AntdIcon from "../pages/Components/Icons/AntdIcon";
import LucideIcon from "../pages/Components/Icons/LucideIcon";
import KanbanBoard from "../pages/Apps/KanbanBoard";
import LeaderBoard from "../pages/Apps/LeaderBoard";
import Fermerlar from "../pages/Fermerlar/Fermerlar";

const authProtectedRoutes = [
  { path: "/dashboard", component: <Dashboard /> },
  { path: "/fermerlar", component: <Fermerlar /> },

  { path: "/", exact: true, component: <Navigate to="/dashboard" /> },
  { path: "*", component: <Navigate to="/dashboard" /> },

  //pages routes
  { path: "/pages-profile", component: <PagesUserProfile /> },
  { path: "/pages-pricing", component: <Pricing /> },
  { path: "/pages-faqs", component: <FaqPage /> },
  { path: "/pages-team", component: <TeamPage /> },
  { path: "/pages-timeline", component: <Timelinepage /> },

  // Apps
  { path: "/app-email", component: <EmailPage /> },
  { path: "/app-chat", component: <ChatPage /> },
  { path: "/app-kanban", component: <KanbanBoard /> },
  { path: "/app-contact", component: <ContactPage /> },
  { path: "/app-apikey", component: <ApiKey /> },
  { path: "/app-todo", component: <Todo /> },
  { path: "/app-leaderboard", component: <LeaderBoard /> },

  // Widget
  { path: "/widget", component: <Widgets /> },

  //General routes
  { path: "/ui-buttons", component: <UiButtons /> },
  { path: "/ui-typography", component: <UiTypography /> },
  //navigation routes
  { path: "/ui-anchor", component: <UiAnchor /> },
  { path: "/ui-breadcrumb", component: <UiBreadcrumb /> },
  { path: "/ui-dropdown", component: <UiDropdown /> },
  { path: "/ui-pagination", component: <UiPagination /> },
  { path: "/ui-steps", component: <UiSteps /> },
  //data entry routes
  { path: "/ui-autocomplete", component: <UiAutoComplete /> },
  { path: "/ui-cascader", component: <UiCascader /> },
  { path: "/ui-checkbox", component: <UiCheckbox /> },
  { path: "/ui-colorpicker", component: <UiColorPicker /> },
  { path: "/ui-datepicker", component: <UiDatePicker /> },
  { path: "/ui-form", component: <UiForm /> },
  { path: "/ui-input", component: <UiInput /> },
  { path: "/ui-input-number", component: <UiInputNumber /> },
  { path: "/ui-mentions", component: <UiMentions /> },
  { path: "/ui-radio", component: <UiRadio /> },
  { path: "/ui-rate", component: <UiRate /> },
  { path: "/ui-select", component: <UiSelect /> },
  { path: "/ui-slider", component: <UiSlider /> },
  { path: "/ui-switch", component: <UiSwitch /> },
  { path: "/ui-timepicker", component: <UiTimePicker /> },
  { path: "/ui-transfer", component: <UiTransfer /> },
  { path: "/ui-tree-select", component: <UiTreeSelect /> },
  //data display routes
  { path: "/ui-avatar", component: <Avatars /> },
  { path: "/ui-badge", component: <Badges /> },
  { path: "/ui-calender", component: <Calenders /> },
  { path: "/ui-cards", component: <Cards /> },
  { path: "/ui-carousel", component: <Carousels /> },
  { path: "/ui-collapse", component: <UiCollapse /> },
  { path: "/ui-descriptions", component: <UiDescriptions /> },
  { path: "/ui-empty-images", component: <UiEmptyImages /> },
  { path: "/ui-list", component: <UiList /> },
  { path: "/ui-popover", component: <UiPopover /> },
  { path: "/ui-qrcode", component: <UiQRCode /> },
  { path: "/ui-segmented", component: <UiSegmented /> },
  { path: "/ui-statistic", component: <UiStatistic /> },
  { path: "/ui-table", component: <UiTable /> },
  { path: "/ui-tabs", component: <UiTabs /> },
  { path: "/ui-tag", component: <UiTag /> },
  { path: "/ui-timeline", component: <UiTimeline /> },
  { path: "/ui-tooltip", component: <UiTooltip /> },
  { path: "/ui-tour", component: <UiTour /> },
  { path: "/ui-tree", component: <UiTree /> },
  //Feedback routes
  { path: "/ui-alerts", component: <Alerts /> },

  { path: "/ui-drawer", component: <UiDrawer /> },
  { path: "/ui-message", component: <UiMessage /> },
  { path: "/ui-modal", component: <UiModal /> },
  { path: "/ui-notification", component: <UiNotification /> },
  { path: "/ui-popconfirm", component: <UiPopconfirm /> },
  { path: "/ui-progress", component: <UiProgress /> },
  { path: "/ui-result", component: <UiResult /> },
  { path: "/ui-skeleton", component: <UiSkeleton /> },
  { path: "/ui-spin", component: <UiSpin /> },
  //chart's
  { path: "/charts-basic", component: <BasicLineChart /> },
  { path: "/charts-multi-line", component: <MultiLineCharts /> },
  { path: "/charts-step-line", component: <StepLineChart /> },
  { path: "/ui-Basic-Area", component: <BasicAreachart /> },
  { path: "/ui-stacked-area", component: <StackedArea /> },
  { path: "/ui-percentage-area", component: <PercentageArea /> },
  { path: "/ui-Basic-histogram", component: <BasicHistogram /> },
  { path: "/ui-stacked-column", component: <StackedColumn /> },
  { path: "/ui-Grouped-histogram", component: <GroupedHistogram /> },
  { path: "/ui-Percentage-histogram", component: <PercentageHistogram /> },
  { path: "/ui-Basic-bar-chart", component: <BasicBarCharts /> },
  { path: "/ui-stacked-bar", component: <StackedBarChart /> },
  { path: "/ui-grouped-bar", component: <GroupBarChart /> },
  { path: "/ui-pie-chart", component: <PieCharts /> },
  { path: "/ui-Ring-diagram", component: <RingDiagramChart /> },
  { path: "/ui-Dash-board", component: <DashboardProgressChart /> },
  { path: "/ui-water-wave-map", component: <WaterWaveCharts /> },
  { path: "/ui-bubble-chart", component: <Bubblecharts /> },

  //plugins routes
  { path: "/plugins-text-editor", component: <PluginTextEditor /> },
  { path: "/plugins-forms", component: <Forms /> },
  { path: "/plugins-clipboard", component: <ClipBoard /> },
  { path: "/plugins-text-loop", component: <Textloop /> },
  { path: "/plugins-video", component: <Video /> },
  { path: "/plugins-animation", component: <Animation /> },

  //icons
  { path: "/icon-antd", component: <AntdIcon /> },
  { path: "/icon-lucide", component: <LucideIcon /> },

  // { path: "/ui-Ring-diagram", component: <RingDiagram /> },
  { path: "/ui-Basic-Bullet-Chart", component: <BulletCharts /> },
  { path: "/ui-Scatterplot", component: <ScatterPlotcharts /> },

  // user profile
  { path: "/user-profile", component: <UserProfile /> },

  { path: "/", component: <Dashboard /> },
  { path: "/", exact: true, component: <Navigate to="/dashboard" /> },
];

const publicRoutes = [
  // Authentication
  { path: "/login", component: <Signin /> },
  { path: "/logout", component: <Logout /> },
  { path: "/register", component: <Register /> },
  { path: "/forgot-password", component: <Forgetpassword /> },

  // Authentication Inner
  { path: "/auth-signin", component: <SignIn /> },
  { path: "/auth-signup", component: <AuthSignUp /> },
  // { path: "/auth-signout", component: < /> },
  { path: "/auth-pass-reset", component: <PasswordReset /> },
  { path: "/auth-pass-create", component: <PasswordCreate /> },
  { path: "/auth-lockscreen", component: <LockScreen /> },
  { path: "/auth-two-step", component: <TwoStepVerification /> },
  { path: "/auth-success-msg", component: <SuccessMessage /> },

  // Error
  { path: "/error-404", component: <Fourzerofour /> },
  { path: "/error-500", component: <Fivehundred /> },
  { path: "/error-404-alt", component: <FourzerofourAlt /> },
  { path: "/error-offline", component: <Offline /> },

  // Pages
  { path: "/pages-maintenance", component: <Maintenance /> },
  // { path: "/pages-comingsoon", component: <Offline /> },

  // Auth- Inner
];

export { publicRoutes, authProtectedRoutes };
