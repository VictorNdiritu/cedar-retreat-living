import livingRoom from "@/assets/cedar/cedar-living-room.jpeg.asset.json";
import sittingArea from "@/assets/cedar/cedar-sitting-area.jpeg.asset.json";
import bathroom from "@/assets/cedar/cedar-bathroom.jpeg.asset.json";
import veranda from "@/assets/cedar/cedar-veranda.jpeg.asset.json";
import writingNook from "@/assets/cedar/cedar-writing-nook.jpeg.asset.json";
import bedroom from "@/assets/cedar/cedar-bedroom.jpeg.asset.json";
import gardenPatio from "@/assets/cedar/cedar-garden-patio.jpeg.asset.json";
import bathroomVanity from "@/assets/cedar/cedar-bathroom-vanity.jpeg.asset.json";
import familyMoment from "@/assets/cedar/cedar-family-moment.jpeg.asset.json";

export const cedarPhotos = {
  hero: {
    src: familyMoment.url,
    alt: "Two older adults enjoying a conversation on a garden veranda",
  },
  livingRoom: {
    src: livingRoom.url,
    alt: "A comfortable Cedar Retreat room with a bed and sitting area",
  },
  sittingArea: {
    src: sittingArea.url,
    alt: "A bright room with space to sit and relax",
  },
  bathroom: {
    src: bathroom.url,
    alt: "A spacious bathroom with a walk-in shower",
  },
  veranda: {
    src: veranda.url,
    alt: "A shaded veranda beside the garden",
  },
  writingNook: {
    src: writingNook.url,
    alt: "A writing desk beside a window",
  },
  bedroom: {
    src: bedroom.url,
    alt: "A bedroom with a comfortable bed and seating",
  },
  gardenPatio: {
    src: gardenPatio.url,
    alt: "Outdoor seating among the trees and garden plants",
  },
  bathroomVanity: {
    src: bathroomVanity.url,
    alt: "A bathroom vanity with twin sinks",
  },
} as const;

export const cedarGallery = [
  { title: "Room to settle in", ...cedarPhotos.livingRoom },
  { title: "A place to pause", ...cedarPhotos.sittingArea },
  { title: "A bright, quiet corner", ...cedarPhotos.writingNook },
  { title: "A comfortable bedroom", ...cedarPhotos.bedroom },
  { title: "A veranda beside the garden", ...cedarPhotos.veranda },
  { title: "Time outdoors", ...cedarPhotos.gardenPatio },
  { title: "Bathroom", ...cedarPhotos.bathroom },
  { title: "Bathroom vanity", ...cedarPhotos.bathroomVanity },
  { title: "A moment together", ...cedarPhotos.hero },
] as const;

export const cedarVideos = [
  {
    title: "A look at Cedar Retreat",
    src: "https://res.cloudinary.com/o0dssxuo/video/upload/v1795551300/WhatsApp_Video_2026-11-23_at_17.50.093.mp4",
    poster: cedarPhotos.hero.src,
  },
  {
    title: "Another view of Cedar Retreat",
    src: "https://res.cloudinary.com/o0dssxuo/video/upload/v1795551327/WhatsApp_Video_2026-11-23_at_17.50.094.mp4",
    poster: cedarPhotos.veranda.src,
  },
] as const;

export const cedarNavigation = [
  { label: "Home", to: "/" },
  { label: "About", to: "/about" },
  { label: "Living options", to: "/living" },
  { label: "Activities", to: "/activities" },
  { label: "Resources", to: "/resources" },
  { label: "Media", to: "/media" },
  { label: "Contact", to: "/contact" },
] as const;