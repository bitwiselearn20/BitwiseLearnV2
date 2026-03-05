import json
import aio_pika
from config import get_settings

settings = get_settings()


async def start_consumer(queue_name: str, callback):
    """Start consuming messages from a RabbitMQ queue."""
    connection = await aio_pika.connect_robust(settings.MQ_CLIENT)
    channel = await connection.channel()
    await channel.set_qos(prefetch_count=1)

    queue = await channel.declare_queue(queue_name, durable=True)

    async def on_message(message: aio_pika.abc.AbstractIncomingMessage):
        async with message.process():
            body = json.loads(message.body.decode())
            await callback(body)

    await queue.consume(on_message)
    return connection
