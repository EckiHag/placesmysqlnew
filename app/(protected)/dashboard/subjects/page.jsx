import CardSubject from "@/components/CardSubject"
// import { subjects } from "@/jsonschemas/mern.subjects"
import { getSubjectsAll } from "@/data/subjects"

const SubjectsList = async () => {
  const subjects = await getSubjectsAll()
  const sortedSubjects = subjects.sort((a, b) => new Date(b.created.$date) - new Date(a.created.$date))

  return (
    <div className="mx-auto flex justify-center flex-col mt-3">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {sortedSubjects.map((subject) => (
          <div key={subject.id}>
            <CardSubject id={subject.id} image={subject.image} title={subject.title} description={subject.description} />
          </div>
        ))}
      </div>
    </div>
  )
}

export default SubjectsList
