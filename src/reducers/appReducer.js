import { createSlice } from "@reduxjs/toolkit";

export const appSlice = createSlice({
  name: "app",
  initialState: {
    isGalleryActive: true,
    isSideMenuActive: false,
    isGridActive: false,
    isContactActive: false,
    isAboutActive: false,
    searchFilter: "",
    spots: [
      {
        id: 1,
        name: "Biologia (Mar del Plata)",
        src: "Biologia",
      },
      {
        id: 2,
        name: "Cabo Corrientes",
        src: "Cabo-Corrientes",
      },
      {
        id: 3,
        name: "Cardiel (Mar del Plata)",
        src: "Cardiel",
      },
      {
        id: 4,
        name: "Chapadmalal",
        src: "Chapadmalal",
      },
      {
        id: 5,
        name: "Constitucion (Mar del Plata)",
        src: "Constitucion",
      },
      {
        id: 6,
        name: "Diva (Mar del Plata)",
        src: "Diva",
      },
      {
        id: 7,
        name: "El Muelle",
        src: "El-Muelle_1",
      },
      {
        id: 8,
        name: "El Pomol",
        src: "El-Pomol",
      },
      {
        id: 9,
        name: "Escollera Necochea",
        src: "Escollera-Necochea",
      },
      {
        id: 10,
        name: "Escollera Sur (Mar del Plata)",
        src: "Escollera-Sur",
      },
      {
        id: 11,
        name: "Horizonte (Mar del Plata)",
        src: "Horizonte",
      },
      {
        id: 12,
        name: "La Paloma (Mar del Plata)",
        src: "La-Paloma",
      },
      {
        id: 13,
        name: "La Pepita (Mar del Plata)",
        src: "La-Pepita",
      },
      {
        id: 14,
        name: "La Perla (Mar del Plata)",
        src: "La-Perla-1-Mar-del-Plata",
      },
      {
        id: 15,
        name: "La Popular (Mar-del-Plata)",
        src: "La-Popular",
      },
      {
        id: 16,
        name: "La Virazon",
        src: "La-Virazon",
      },
      {
        id: 17,
        name: "Las Cuevas",
        src: "Las-Cuevas",
      },
      {
        id: 18,
        name: "Luna Roja",
        src: "Luna-Roja",
      },
      {
        id: 19,
        name: "Maquinita",
        src: "Maquinita",
      },
      {
        id: 20,
        name: "Mar de Ajó",
        src: "Mar-de-Ajo",
      },
      {
        id: 21,
        name: "Miramar",
        src: "Miramar_2",
      },
      {
        id: 22,
        name: "Monte Hermoso",
        src: "Monte-Hermoso-1",
      },
      {
        id: 23,
        name: "Off the wall",
        src: "Offthewall",
      },
      {
        id: 24,
        name: "Paradise",
        src: "Paradise",
      },
      {
        id: 25,
        name: "Pinamar",
        src: "Pinamar",
      },
      {
        id: 26,
        name: "Playa Mariano (Mar del Plata)",
        src: "Mariano",
      },
      {
        id: 27,
        name: "Playa Varesse",
        src: "Varese",
      },
      {
        id: 28,
        name: "Punta Medanos",
        src: "Punta-Medanos",
      },
      {
        id: 29,
        name: "Quequen",
        src: "Quequen",
      },
      {
        id: 30,
        name: "Santa Clara del Mar",
        src: "Santa-Clara-del-Mar",
      },
      {
        id: 31,
        name: "Sun Rider (Mar del Plata)",
        src: "Sun-Rider",
      },
      {
        id: 33,
        name: "Villa Gesell",
        src: "Villa-Gesell",
      },
      {
        id: 34,
        name: "Waikiki",
        src: "Waikiki",
      },
      {
        id: 35,
        name: "Yacht",
        src: "Yacht",
      },
    ],
    filteredSpots: [],
  },
  reducers: {
    showGallery: (state) => {
      state.isGalleryActive = true;
      state.isGridActive = state.isSideMenuActive = state.isContactActive = state.isAboutActive = false;
    },
    showGrid: (state) => {
      state.isGridActive = true;
      state.isGalleryActive = state.isContactActive = state.isAboutActive = false;
    },
    showContact: (state) => {
      state.isContactActive = true;
      state.isGalleryActive = state.isGridActive = state.isAboutActive = false;
    },
    showAbout: (state) => {
      state.isAboutActive = true;
      state.isGalleryActive = state.isGridActive = state.isContactActive = false;
    },
    toggleIsSideMenuActive: (state) => {
      state.isSideMenuActive = !state.isSideMenuActive;
    },
    search: (state, action) => {
      state.searchFilter = action.payload;
      state.filteredSpots = state.spots.filter(
        (spot) =>
          spot.name.toUpperCase().indexOf(state.searchFilter.toUpperCase()) > -1
      );
    },
  },
});

export const { showGallery, showGrid, showContact, showAbout, toggleIsSideMenuActive, search } =
  appSlice.actions;

export default appSlice.reducer;
