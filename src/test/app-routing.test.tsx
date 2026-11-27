import { QueryClient } from "@tanstack/react-query";
import { createRouter, rootRouteId } from "@tanstack/react-router";
import { describe, expect, it } from "vitest";

import { cedarContact, cedarNavigation } from "@/lib/cedar-content";
import { routeTree } from "@/routeTree.gen";

// Match routes without running loaders or rendering: loaders may need a server or
// network the test run lacks, and jsdom never loads the stylesheets React waits on.
describe("App routing", () => {
  it.each(cedarNavigation)("matches an independent page for $to ($label)", ({ to }) => {
    const router = createRouter({ routeTree, context: { queryClient: new QueryClient() } });

    const matches = router.matchRoutes(to);

    expect(matches.at(-1)?.routeId).not.toBe(rootRouteId);
    expect(matches.at(-1)?.fullPath).toBe(to);
  });
});

describe("Cedar Retreat contact details", () => {
  it("uses the requested number for calls and WhatsApp", () => {
    expect(cedarContact.phoneNumber).toBe("+254 185 424 632");
    expect(cedarContact.phoneLink).toBe("+254185424632");
    expect(cedarContact.whatsappLink).toBe("254185424632");
  });
});
