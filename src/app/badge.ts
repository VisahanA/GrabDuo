export type BadgeType =
  | "Organic"
  | "Fresh"
  | "Bakery"
  | "Protein"
  | "Ready to eat"
  | "Snacks"
  | "Beverages"
  | "Traditional"
  | "Spicy"
  | "Sweet"
  | "Dairy"
  | "Grains"
  | "Vegetables"
  | "Fruits"
  | "Biscuits";

export interface Badge {
  type: BadgeType;
  bgColor: string;
  textColor: string;
}

export const badges: Record<BadgeType, Badge> = {
  Organic: {
    type: "Organic",
    bgColor: "bg-green-100",
    textColor: "text-green-800",
  },
  Fresh: {
    type: "Fresh",
    bgColor: "bg-blue-100",
    textColor: "text-blue-800",
  },
  Bakery: {
    type: "Bakery",
    bgColor: "bg-orange-100",
    textColor: "text-orange-800",
  },
  Protein: {
    type: "Protein",
    bgColor: "bg-purple-100",
    textColor: "text-purple-800",
  },
  "Ready to eat": {
    type: "Ready to eat",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-800",
  },
  Snacks: {
    type: "Snacks",
    bgColor: "bg-red-100",
    textColor: "text-red-800",
  },
  Beverages: {
    type: "Beverages",
    bgColor: "bg-cyan-100",
    textColor: "text-cyan-800",
  },
  Traditional: {
    type: "Traditional",
    bgColor: "bg-amber-100",
    textColor: "text-amber-800",
  },
  Spicy: {
    type: "Spicy",
    bgColor: "bg-rose-100",
    textColor: "text-rose-800",
  },
  Sweet: {
    type: "Sweet",
    bgColor: "bg-pink-100",
    textColor: "text-pink-800",
  },
  Dairy: {
    type: "Dairy",
    bgColor: "bg-indigo-100",
    textColor: "text-indigo-800",
  },
  Grains: {
    type: "Grains",
    bgColor: "bg-yellow-100",
    textColor: "text-yellow-800",
  },
  Vegetables: {
    type: "Vegetables",
    bgColor: "bg-green-100",
    textColor: "text-green-800",
  },
  Fruits: {
    type: "Fruits",
    bgColor: "bg-orange-100",
    textColor: "text-orange-800",
  },
  Biscuits: {
    type: "Biscuits",
    bgColor: "bg-amber-100",
    textColor: "text-amber-800",
  },
};

export const getBadgeStyles = (badgeType: BadgeType): string => {
  const badge = badges[badgeType];
  return `${badge.bgColor} ${badge.textColor}`;
};
