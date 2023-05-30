module.exports = {
 svgo: false,
 plugins: [
  {
   name: 'preset-default',
   params: {
    overrides: {
     collapseGroups: false,
     cleanupIds: false,
    },
   },
  },
 ],
}
