export default (models) => {
  const { Breed, Fact, CountBreed, CountFact } = models

  CountBreed.hasOne(Breed)
  CountFact.hasOne(Fact)
}
