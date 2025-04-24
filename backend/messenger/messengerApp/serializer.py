from models import Chat,Message,MessageStatus,User,Reaction,Attachment
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = '__all__'

class ChatSerializer(serializers.ModelSerializer):
    user = UserSerializer()

    class Meta:
        model = Chat
        fields = '__all__'

class MessageSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    chat = ChatSerializer()

    class Meta:
        model = Message
        fields = '__all__'

class MessageStatusSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    message = MessageSerializer()

    class Meta:
        model = MessageStatus
        fields = '__all__'

class ReactionSerializer(serializers.ModelSerializer):
    user = UserSerializer()
    message = MessageSerializer()

    class Meta:
        model = Reaction
        fields = '__all__'

class AttachmentSerializer(serializers.ModelSerializer):
    message = MessageSerializer()

    class Meta:
        model = Attachment
        fields = '__all__'


