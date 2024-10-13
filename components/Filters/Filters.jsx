export const CATEGORIES = [
  "Admin & Leadership",
  "Botany",
  "Ecology",
  "Environmental Education",
  "Fisheries",
  "Forestry",
  "Hydrology",
  "Land Trust",
  "Marine Biology",
  "General / Stewardship",
  "Policy And Law",
  "Outdoor Recreation",
  "Restoration",
  "Sustainability",
  "Wildlife",
  "Other",
];

export const LOCATIONS = [
  "Alabama",
  "Alaska",
  "Arizona",
  "Arkansas",
  "California",
  "Colorado",
  "Connecticut",
  "Delaware",
  "DC",
  "Florida",
  "Georgia",
  "Hawaii",
  "Idaho",
  "Illinois",
  "Indiana",
  "Iowa",
  "Kansas",
  "Kentucky",
  "Louisiana",
  "Maine",
  "Maryland",
  "Massachusetts",
  "Michigan",
  "Minnesota",
  "Mississippi",
  "Missouri",
  "Montana",
  "Nebraska",
  "Nevada",
  "New Hampshire",
  "New Jersey",
  "New Mexico",
  "New York",
  "North Carolina",
  "North Dakota",
  "Ohio",
  "Oklahoma",
  "Oregon",
  "Pennsylvania",
  "Rhode Island",
  "South Carolina",
  "South Dakota",
  "Tennessee",
  "Texas",
  "Utah",
  "Vermont",
  "Virginia",
  "Washington",
  "West Virginia",
  "Wisconsin",
  "Wyoming",
  "US Territories"
];

export const REGIONS = [
  "Africa",
  "Asia",
  "Australia",
  "Canada",
  "Europe",
  "Latin America",
  "Other",
  "Remote / Flexible"
];

export const JOB_TYPES = [
  "Permanent",
  "Temporary",
  "Paid Internship",
  "Student / postdoc",
  "AmeriCorps",
  "Unpaid"
];

export default function Icon() {
  return (
    <svg
      className="w-5 h-5"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
        d="M19 9l-7 7-7-7"
      ></path>
    </svg>
  );
}