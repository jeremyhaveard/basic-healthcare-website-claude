import type { InsuranceInfo } from "@/lib/types";

const insurance: InsuranceInfo = {
  planName: "Blue Shield of CA",
  planType: "PPO",
  memberId: "BSC99388102",
  groupNumber: "991A-20",
  copays: [
    { label: "Office", amount: "$20" },
    { label: "Specialist", amount: "$40" },
  ],
};

export async function getInsuranceInfo(): Promise<InsuranceInfo> {
  return insurance;
}
