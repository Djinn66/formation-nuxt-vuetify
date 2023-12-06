
export function useAlert() {
    const alerte = ref({
        texte: "",
        severity: "warning",
    });

    function updateTexteAlerte(texte: string, severity: string) {
        alerte.value = {texte, severity};
    }

    return {
        alerte,
        updateTexteAlerte,
    };
}
