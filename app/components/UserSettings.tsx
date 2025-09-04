'use client';

interface UserItemProps {
  name: string;
  handle: string;
  avatar: string;
  amount?: string;
  enabled: boolean;
}

function UserItem({ name, handle, avatar, amount, enabled }: UserItemProps) {
  return (
    <div className="flex items-center justify-between py-2">
      <div className="flex items-center space-x-3">
        <div className="w-8 h-8 bg-gradient-to-br from-blue-400 to-purple-600 rounded-full flex items-center justify-center">
          <span className="text-white text-xs font-semibold">{avatar}</span>
        </div>
        <div>
          <div className="font-medium text-sm">{name}</div>
          <div className="text-xs text-gray-500">@{handle}</div>
        </div>
      </div>
      <div className="flex items-center space-x-2">
        {amount && <span className="text-sm font-semibold">{amount}</span>}
        <div className={`w-10 h-5 rounded-full ${enabled ? 'bg-blue-500' : 'bg-gray-300'} relative`}>
          <div className={`w-4 h-4 bg-white rounded-full absolute top-0.5 transition-transform ${enabled ? 'translate-x-5' : 'translate-x-0.5'}`}></div>
        </div>
      </div>
    </div>
  );
}

export function UserSettings() {
  return (
    <div className="bg-white rounded-xl p-4">
      <div className="flex items-center justify-between mb-4">
        <h3 className="font-semibold text-gray-800">User whitefilters</h3>
        <span className="text-xs text-gray-500">Show feed</span>
      </div>
      
      <div className="space-y-1">
        <UserItem 
          name="Amy Groelle" 
          handle="amygroelle" 
          avatar="AG" 
          enabled={true}
        />
        <UserItem 
          name="Ali Evans" 
          handle="alievans" 
          avatar="AE" 
          amount="$1,861" 
          enabled={true}
        />
        <UserItem 
          name="RenDesign" 
          handle="rendesign" 
          avatar="RD" 
          enabled={false}
        />
        <UserItem 
          name="Paulo Otegii" 
          handle="paulootegii" 
          avatar="PO" 
          enabled={true}
        />
      </div>
    </div>
  );
}
