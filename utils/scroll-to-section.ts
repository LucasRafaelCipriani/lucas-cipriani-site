export const scrollToSectionHandler = (id: string) => {
  const elemento = document.getElementById(id);
  if (elemento) {
    elemento.scrollIntoView({
      behavior: 'smooth',
      block: 'start',
    });
  }
};
