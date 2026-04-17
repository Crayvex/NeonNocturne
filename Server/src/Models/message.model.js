import mongoose from 'mongoose';

const messageSchema = new mongoose.Schema(
    {
        senderId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        receiverId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'User',
            required: true,
        },
        text: {
            type: String,
            trim: true,
            default: '',
        },
        image: {
            type: String, // Cloudinary URL
            default: '',
        },
        seen: {
            type: Boolean,
            default: false,
        },
    },
    { timestamps: true }
);

// Index for fast conversation queries (fetch chat between two users)
messageSchema.index({ senderId: 1, receiverId: 1 });

const Message = mongoose.model('Message', messageSchema);

export default Message;