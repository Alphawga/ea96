'use client'

import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Button } from "@/components/ui/button"
import { useState } from "react"

interface PaymentDialogProps {
  isOpen: boolean
  onClose: () => void
  plan: {
    name: string
    price: string
  } | null
}

export function PaymentDialog({ isOpen, onClose, plan }: PaymentDialogProps) {
  const [loading, setLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    // Here you would integrate with your payment processor
    await new Promise(resolve => setTimeout(resolve, 2000)) // Simulate API call
    setLoading(false)
    onClose()
  }

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Complete your purchase</DialogTitle>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid gap-4">
            <div>
              <Label htmlFor="plan">Selected Plan</Label>
              <Input id="plan" value={plan?.name} disabled />
            </div>
            <div>
              <Label htmlFor="price">Price</Label>
              <Input id="price" value={plan?.price} disabled />
            </div>
            <div>
              <Label htmlFor="name">Name on Card</Label>
              <Input id="name" placeholder="John Doe" required />
            </div>
            <div>
              <Label htmlFor="card">Card Number</Label>
              <Input id="card" placeholder="4242 4242 4242 4242" required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <Label htmlFor="expiry">Expiry Date</Label>
                <Input id="expiry" placeholder="MM/YY" required />
              </div>
              <div>
                <Label htmlFor="cvc">CVC</Label>
                <Input id="cvc" placeholder="123" required />
              </div>
            </div>
          </div>
          <Button type="submit" className="w-full" disabled={loading}>
            {loading ? "Processing..." : "Pay Now"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  )
} 