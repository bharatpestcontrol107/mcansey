// import { NextResponse } from "next/server"
// import { MongoClient } from "mongodb"

// const uri = process.env.MONGODB_URI
// const client = new MongoClient(uri!)

// export async function POST(req: Request) {
//   if (!uri) {
//     return NextResponse.json({ error: "MongoDB URI is not defined" }, { status: 500 })
//   }

//   try {
//     const formData = await req.json()

//     await client.connect()
//     const database = client.db("your_database_name")
//     const collection = database.collection("form_submissions")

//     const result = await collection.insertOne(formData)

//     return NextResponse.json({ message: "Form submitted successfully", id: result.insertedId }, { status: 200 })
//   } catch (error) {
//     console.error("Error submitting form:", error)
//     return NextResponse.json({ error: "Internal server error" }, { status: 500 })
//   } finally {
//     await client.close()
//   }
// }


import { NextResponse } from "next/server"
import mongoose from "mongoose"


const FormSubmissionSchema = new mongoose.Schema(
  {
    fullName: { type: String, required: true },
    email: { type: String, required: true },
    contactNumber: String,
    services: { type: String, required: true },
    description: { type: String, required: true },
    includeNDA: Boolean,
    captcha: String,
  },
  { timestamps: true },
)

// Create a model from the schema
let FormSubmission: mongoose.Model<any>
try {
  FormSubmission = mongoose.model("FormSubmission")
} catch {
  FormSubmission = mongoose.model("FormSubmission", FormSubmissionSchema)
}

// Connect to MongoDB
const connectDB = async () => {
  if (mongoose.connections[0].readyState) return

  try {
    await mongoose.connect(process.env.MONGODB_URI!)
    console.log("MongoDB connected successfully")
  } catch (error) {
    console.error("MongoDB connection error:", error)
  }
}

export async function POST(req: Request) {
  if (!process.env.MONGODB_URI) {
    return NextResponse.json({ error: "MongoDB URI is not defined" }, { status: 500 })
  }

  await connectDB()

  try {
    const formData = await req.json()

    const submission = new FormSubmission(formData)
    await submission.save()

    return NextResponse.json({ message: "Form submitted successfully", id: submission._id }, { status: 200 })
  } catch (error) {
    console.error("Error submitting form:", error)
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}


