export type Role = "npc_family" | "tutor";

export async function sendMessage(
    message: string,
    role: Role
): Promise<string> {
    // MOCK RESPONSE - TODO: Replace with actual API call
    if (role == "npc_family") {
        return Promise.resolve(
            "Family npc response"
        );
    }
    else {
        return Promise.resolve(
            "Tutor response"
        );
    }
}