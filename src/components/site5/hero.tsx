'use client'

import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'

export default function Hero() {
  return (
    <section className="pt-32 pb-16 bg-[#F8F8F8]">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center text-black">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Badge */}
            <div className="inline-flex items-center bg-white rounded-full px-4 py-1 mb-6">
              <span className="text-sm">New</span>
              <span className="ml-2 text-sm text-gray-500">AI-Powered Document Review →</span>
            </div>

            <h1 className="text-5xl font-medium mb-6 text-black">
              Smarter Writing,
              <br />
              Simpler Review.
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              One-stop platform for professional document review and content creation. Transform your writing process with AI-powered assistance.
            </p>

            <Button className="bg-black text-white hover:bg-gray-800 h-12 px-8">
              Start Free Trial
            </Button>

            {/* Trust Indicators */}
            <div className="mt-12 flex items-center gap-8">
              <div className="flex items-center gap-3">
                <div className="text-2xl font-medium">15k+</div>
                <div className="text-gray-600 text-sm">Documents<br />Reviewed</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-2xl font-medium">99%</div>
                <div className="text-gray-600 text-sm">Client<br />Satisfaction</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="text-2xl font-medium">24h</div>
                <div className="text-gray-600 text-sm">Average<br />Turnaround</div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex justify-between items-center mb-8">
                <div>
                  <div className="text-sm text-gray-500">Document Status</div>
                  <div className="text-2xl font-medium">In Review</div>
                </div>
                <div className="text-emerald-500 text-sm">2 of 3 Complete</div>
              </div>
              <div className="space-y-4">
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">Business Proposal.docx</div>
                    <div className="text-emerald-500">Done</div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-full"></div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">Marketing Copy.docx</div>
                    <div className="text-emerald-500">Done</div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-emerald-500 w-full"></div>
                  </div>
                </div>
                <div className="bg-gray-50 rounded-lg p-4">
                  <div className="flex justify-between items-center mb-2">
                    <div className="font-medium">Annual Report.docx</div>
                    <div className="text-blue-500">In Progress</div>
                  </div>
                  <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                    <div className="h-full bg-blue-500 w-3/4"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* Floating Elements */}
            <div className="absolute -right-4 -bottom-4 bg-black text-white p-4 rounded-lg shadow-lg">
              <div className="text-sm">AI Suggestions</div>
              <div className="text-xs text-gray-400 mt-1">12 improvements found</div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
} 