function validate() {
    const name = /[a-z]*\ *[a-z]/gi;
    const cell = /(\+[0-9]+\ +)?(\(*[0-9]{3}\)*)\ *-*\.*([0-9]{3})\ *-*\.*([0-9]{4})/g;
}